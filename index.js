let recursiveFunction = function (sorted_arr, target, start, end) {
    // here is the base condition
    if (start > end) return false;

    // find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare the middle to the given key target.
    if (sorted_arr[mid] == target) return true;

    // If the element in the middle is greater than the target, look in the left half of the middle.
    if (sorted_arr[mid] > target)
        return recursiveFunction(sorted_arr, target, start, mid - 1);
    // If the element in the middle is smaller than the target, look in the right half of the middle.
    else return recursiveFunction(sorted_arr, target, mid + 1, end);
};

// Driver code
let sorted_arr = [2, 6, 8, 10, 12, 14];
let target = 9;

if (recursiveFunction(sorted_arr, target, 0, sorted_arr.length - 1))
    document.write("Target found!<br>");
else document.write("Target not found!<br>");

target = 10;

if (recursiveFunction(sorted_arr, target, 0, sorted_arr.length - 1))
    document.write("Target found!<br>");
else document.write("Target not found!<br>");
