#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
<<<<<<< HEAD
	digit = abs(number) % 10
	if number < 0:
	    digit = -digit
	    print("Last digit of {} is {} and is ".format(number, digit), end="")
	    if digit > 5:
	        print("greater than 5")
		elif digit == 0:
		    print("0")
		    else:
		        print("less than 6 and not 0")
=======
digit = abs(number) % 10
if number < 0:
    digit = -digit
print("Last digit of {} is {} and is ".format(number, digit), end="")
if digit > 5:
    print("greater than 5")
elif digit == 0:
    print("0")
else:
    print("less than 6 and not 0")
>>>>>>> bef5bfd73b45ea39ab06b20ee95b7e2be080e5db
