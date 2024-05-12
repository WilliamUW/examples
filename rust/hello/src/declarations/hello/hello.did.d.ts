import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'get_all_owners' : ActorMethod<[], Array<string>>,
  'get_owner' : ActorMethod<[string], string>,
  'greet' : ActorMethod<[string], string>,
  'intro' : ActorMethod<[string], string>,
  'set_owner' : ActorMethod<[string, string], undefined>,
}
