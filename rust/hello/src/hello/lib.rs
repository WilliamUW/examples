#[ic_cdk_macros::query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[ic_cdk_macros::query]
fn intro(name: String) -> String {
    format!("Hello, {}! My name is Tibbers.", name)
}