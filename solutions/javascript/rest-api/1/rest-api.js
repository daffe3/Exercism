//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {

  constructor(database = { users: [] }) {

    this.db = database;
  }

  get(url) {
    if (url.startsWith('/users')) {
      if (url.includes('?')) {
        const queryString = url.split('?')[1];
        const params = new URLSearchParams(queryString);
        const usersToFetch = params.get('users')?.split(',') || [];

        const filteredUsers = this.db.users
          .filter(user => usersToFetch.includes(user.name))
          .sort((a, b) => a.name.localeCompare(b.name));

        return { users: filteredUsers };
      }

      const allUsers = [...this.db.users].sort((a, b) => a.name.localeCompare(b.name));
      return { users: allUsers };
    }

    throw new Error('Unknown GET endpoint');
  }

  post(url, payload) {
    if (url === '/add') {
      return this._handleAddUser(payload);
    }

    if (url === '/iou') {
      return this._handleCreateIOU(payload);
    }

    throw new Error('Unknown POST endpoint');
  }

  _handleAddUser({ user: name }) {
    const newUser = {
      name,
      owes: {},
      owed_by: {},
      balance: 0.0
    };

    this.db.users.push(newUser);
    return newUser;
  }

  _handleCreateIOU({ lender: lenderName, borrower: borrowerName, amount }) {
    const lender = this.db.users.find(u => u.name === lenderName);
    const borrower = this.db.users.find(u => u.name === borrowerName);

    if (lender.owes[borrowerName]) {
      const existingDebt = lender.owes[borrowerName];
      if (existingDebt > amount) {
        lender.owes[borrowerName] -= amount;
        borrower.owed_by[lenderName] -= amount;
      } else if (existingDebt === amount) {
        delete lender.owes[borrowerName];
        delete borrower.owed_by[lenderName];
      } else {
        const remaining = amount - existingDebt;
        delete lender.owes[borrowerName];
        delete borrower.owed_by[lenderName];

        lender.owed_by[borrowerName] = (lender.owed_by[borrowerName] || 0) + remaining;
        borrower.owes[lenderName] = (borrower.owes[lenderName] || 0) + remaining;
      }
    } else {
      lender.owed_by[borrowerName] = (lender.owed_by[borrowerName] || 0) + amount;
      borrower.owes[lenderName] = (borrower.owes[lenderName] || 0) + amount;
    }

    this._recalculateBalance(lender);
    this._recalculateBalance(borrower);

    const updatedUsers = [lender, borrower].sort((a, b) => a.name.localeCompare(b.name));
    return { users: updatedUsers };
  }

  _recalculateBalance(user) {
    const totalOwedByOthers = Object.values(user.owed_by).reduce((sum, val) => sum + val, 0);
    const totalOwedToOthers = Object.values(user.owes).reduce((sum, val) => sum + val, 0);
    user.balance = totalOwedByOthers - totalOwedToOthers;
  }
}