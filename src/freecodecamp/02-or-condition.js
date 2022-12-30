let strings = [
    "James has a pet hamster.",
    "James has a pet cat.",
    "James has a pet dog.",
    "James has a pet bird.",
    "James has a pet monkey.",
    "James has a pet fish."
];

for (let i = 0; i < strings.length; i++) {
    let petRegex = /dog|cat|bird|fish/; 
    let result = petRegex.test(strings[i]);
    console.log(result + " is that " + strings[i])
}
