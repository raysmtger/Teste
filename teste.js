function checkSubarraySum(nums, k) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            if (sum % k === 0 && (j - i + 1) >= 2) {
                return true;
            }
        }
    }

    return false;
}


console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); 
