def twoSum(nums, target):
        dictionary = {}
        for i, j in enumerate(nums):
            complement = target - j
            if complement in dictionary:
                return [dictionary[complement], i]
            print(dictionary)
            dictionary[j] = i 
            

print(twoSum([3,7,4,10,2], 6))




myDict = {'key':1, 'ok': 2}

for key, value in myDict.items():
      myDict[key] += 5
      print(key,value ++ 5)