#shows that ints can be directly added together, as you would normally expect.
print(3+7)

def multiply(a, b):
  return a * b

print(multiply(5, 6))

count = 7
while count > 0:
  print(f'hello: {count}')
  count -= 1

that = [1,2,3,4,5,6]
for this in that:
  print(this)


#shows template literal equivalents in python (string literals)
def templateLit(name):
  print(f'the name is {name}')

templateLit('Ari')

#the formula for list comp is: [expression for variable in iterable]
# list comprehension - immediatelly evaluates inside of a list and places each evaluation into it's own indexed location.
print([x**2 for x in range(4)])

#the formula for a dict comp is {key_expression:value_expression for item in iterable if condition}
#the key expression and value expression are the expression to compute the key for each item. 
#dictionary comprehension 
print({x: x * x for x in range(1, 11)})

#good use of dict comprehen:
print({x: f'{x} is an even number' for x in range(10) if x % 2 == 0})


#very important! if you need user input!!
x = input('write a number!')

#what happens if we uncomment the line underneath this? What would you expect
# print(x + 10)
print(int(x) + 10)

#this uses the slice operator. The first value is the starting index, the second position says where to slice up until but not including and the last position tells it how to iterate over the items. 
y = input('write a word!')

#write abcdefghijk and see if you can spot what is happening!
print(y[7:3:-1])


#twoSums for loops
def twoSums(nums, target):
  for i in range(len(nums)):
    for j in range(i + 1, len(nums)):
      if nums[i] + nums[j] == target:
        return [i,j]
      

print(twoSums([3,2,4], 6)) 

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

def twoSumTwo(self, nums, target):
  for num in range(len(nums)):
    for j in range(num + 1, len(nums)):
      if nums[num] + nums[j] == target:
        return [num, j]