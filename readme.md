This is the results from step 1:

Results for the extraLargeArray
insert 482.5774 ms
append 3.9509 ms

Results for the LargeArray
insert 4.8677 ms
append 327.9 μs

Results for the mediumArray
insert 98.5 μs
append 80.9 μs

Results for the smallArray
insert 24.3 μs
append 56 μs

Results for the tinyArray
insert 18.5 μs
append 56.6 μs


The pattern that I see is that as the arrays are small/ at a small length the difference is negligible. But as the arrays get much larger the difference is quite large. The append scales quite well as the array gets larger. While the insert scales quite poorly as the array gets larger. As the evidence shows append is a much more scaleable function.

The reason why insert is so much slower is because it uses the unshift method where it adds a new array at the beginning of the array. Why this matters is that when that occurs each item in the array after has to be shifted in their index value so where it used to be a index value of 2 it now has to be 3 and so forth. This gets to be a problem when the array is very large. It has to compute for all the numbers following.