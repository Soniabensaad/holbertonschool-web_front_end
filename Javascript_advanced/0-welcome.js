function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName(); 
}


welcome('Holberton', 'School');
welcome('eggceptional', 'individual');
