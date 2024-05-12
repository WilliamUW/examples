// use ic_cdk::api::caller;
use ic_cdk_macros::{query, update};
use std::collections::HashMap;
use lazy_static::lazy_static;
use std::sync::RwLock;

// Use lazy_static to create a global, mutable hashmap.
lazy_static! {
    static ref ANIMAL_OWNERSHIP: RwLock<HashMap<String, String>> = RwLock::new(HashMap::new());
}

// Function to set the owner of an animal
#[update]  // Using update because this modifies the state
fn set_owner(animal_id: String, owner_name: String) {
    let mut map = ANIMAL_OWNERSHIP.write().unwrap();
    map.insert(animal_id, owner_name);
}

// Function to get the owner of an animal
#[query]  // Using query because this does not modify the state
fn get_owner(animal_id: String) -> String {
    let map = ANIMAL_OWNERSHIP.read().unwrap();
    map.get(&animal_id).cloned().unwrap_or_else(|| "No owner found".to_string())
}

#[query]
fn get_all_owners() -> Vec<String> {
    let map = ANIMAL_OWNERSHIP.read().unwrap();
    let mut result = Vec::new(); // Change to Vec<String>
    for (animal, owner) in map.iter() {
        result.push(format!("{}: {}", animal, owner)); // Remove the newline character
    }
    result
}

// Example additional functions
#[query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[query]
fn intro(name: String) -> String {
    format!("Hello, {}! My name is Tibbers.", name)
}