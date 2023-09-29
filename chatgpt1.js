const arr = ["dog", "guards", "our", "home"];
secondlargeststring(arr);

function secondlargeststring(arr) {
    if (!Array.isArray(arr)) {
        console.error("Input is not an array.");
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log("Sorted Array by Length:", arr);

    if (arr.length < 2) {
        console.log("There is no second-largest string.");
    } else {
        console.log("Second-Largest String:", arr[arr.length - 2]);
    }
}
