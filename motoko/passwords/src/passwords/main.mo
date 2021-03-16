import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Option "mo:base/Option";

actor {


  // Types

  type Credentials = {
    username : Text;
    password : Text;
  };

  type Account = {
    id : Nat;
    username : Text;
    hash : Text;
    salt : Text;
  };

  type Session = {
    principal : Principal;
    account_id : Nat;
  };


  // Initialize Data Structures

  // Arrays a sub-optimal choice here but they're easy to understand
  var accounts : [Account] = [];
  var sessions : [Session] = [];
  var next_account_id : Nat = 0;

  // Public Functions

  public func signup(credentials : Credentials) {
    // Generate a random salt and hash it together with the password
    let _salt = random_salt();
    let _hash = sha256(credentials.password # _salt);

    // Create a new account with the username and hashed password
    let account = {
      id = next_account_id;
      username = creds.username;
      hash = _hash;
      salt = _salt;
    };

    // Save the account and auto-increment the next account ID
    accounts := Array.append<Account>(accounts, [account]);
    next_account_id += 1;
  };

  public shared ({ caller }) func authenticate(creds : Credentials) {
    // Find the account associated with the username
    let account = Option.unwrap(Array.find(accounts, findByUsername(creds.username)));

    // If the hashed passwords match then create a session
    if (sha256(creds.password # account.salt) == account.hash) {
      // The session associates this caller's ID with the account
      let session : Session = {
        principal = caller;
        account_id = account.id;
      };
      sessions := Array.append(sessions, [session]);
    };
  };

  public shared ({ caller }) func whoami() : async Text {
    // Find the account associated with this caller's ID and return the username
    let session = Option.unwrap(Array.find(sessions, findByCaller(caller)));
    let account = Option.unwrap(Array.find(accounts, findByAccountId(session.account_id)));
    return account.username;
  };


  // "Crypto" Library

  func sha256 (raw : Text) : Text {
    // WARNING: This is a terrible hashing algorithm
    raw
  };

  func random_salt () : Text {
    // WARNING: This is a terrible random salt generator
    "salt"
  };


  // Finder Functions

  func findByCaller (caller : Principal) : Session -> Bool {
    return func (session : Session) : Bool {
      session.principal == caller
    };
  };

  func findByAccountId (account_id : Nat) : Account -> Bool {
    return func (account : Account) : Bool {
      account.id == account_id
    };
  };

  func findByUsername (username : Text) : Account -> Bool {
    return func (account : Account) : Bool {
      account.username == username
    };
  };

};