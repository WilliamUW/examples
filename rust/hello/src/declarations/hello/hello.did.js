export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_all_owners' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'get_owner' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'intro' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'set_owner' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
