arr = [1,2,3,4,5,6,7]
def dsa1(arr):
    # print(len(arr))
    temp = 0
    for i in range(int(len(arr)/2)) :
        temp = arr[i]
        arr[i] = arr[len(arr)-1-i]
        arr[len(arr)-1-i] = temp
        # for j in range(len(arr)-1,1,-1):
        # print(arr[len(arr)-1-i])
            # break
    print(arr)

def dsa2(arr):
    length = len(arr)
    print(arr[int(length/2)])

# dsa1(arr)

def dsa3(re):
    rev = re
    last = 0
    while rev > 0 :
        last = last*10 + rev%10
        rev = int(rev/10)
    print(last)

def dsa4(val) :
    suma = 0
    last = 0
    # valu = val
    while val > 0 :
        last = val%10
        suma = suma + last*last*last
        val = int(val/10)
    print(suma)

def dsa5(v1,v2) :
    cnt = 0 
    # n = int((v1+v2)/2)
    for i in range(v1,v2+1):
        n = 2
        while n < int(i/2)+2 :
            if i%n == 0 :
                break
            elif n == int(i/2)+1 and i%n != 0:
                cnt +=1
            n +=1          
    print(cnt)

dsa5(3,9)

