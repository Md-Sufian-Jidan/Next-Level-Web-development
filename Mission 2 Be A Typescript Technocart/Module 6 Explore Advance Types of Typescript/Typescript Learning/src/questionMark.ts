// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null / undefined er upor kaj kore
// ?. optional chaining

const userAge = 21;

const biyerJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log("You are eligible");
    // } else {
    //     console.log("You are not eligible");
    // }

    const result = age >= 21 ? 'You are eligible' : 'You are not eligible';
    console.log(result);
};
biyerJonnoEligible(20);


const userTheme = "Green Theme";

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);


const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";

const resultWithNullish = isAuthenticated ?? "You are guest";

console.log({ resultWithTernary }, { resultWithNullish });

// optional chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string
    }
} = {
    address: {
        city: 'Dhaka',
        town: 'Banani'
    },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);