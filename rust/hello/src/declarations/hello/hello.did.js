export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_owner' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'intro' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'set_owner' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
