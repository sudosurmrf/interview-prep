#twoSums using a hashMap
dict = {}
def hashMap(nums, target):
  for i, num in enumerate(nums):
    print(f' this is a list comp with string literals: {[(index, num) for index, num in enumerate(nums)]}')
    complement = target - num
    if complement in dict:
      return [dict[complement], i ]
    dict[num] = i

print(hashMap([3,7,4,10,2], 6))
print(dict)

# only need the below self if on leet code.

def twoSumTwo(self, nums, target):
  for num in range(len(nums)):
    for j in range(num + 1, len(nums)):
      if nums[num] + nums[j] == target:
        return [num, j]