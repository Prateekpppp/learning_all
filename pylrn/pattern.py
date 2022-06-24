def getno(n) :
    i = 0
    # j = n
    while(i<n) :
        # print('t')
        # if()
        j = n-1
        while(j>=i):
            print('t ',end='')
            j-=1
        print('\r')
        i+=1
# getno(3)

def pyramid(n) :
    x = 2*n
    for i in range(n) :
        for j in range(x) :
            if(j<n-i-1) :
                print(' ',end='')
            elif(j>n+i-1) :
                print(' ',end='')
            else :
                print('t',end='')
        print('\r')
# pyramid(8)
def invpyramid(n):
    x = 2*n
    for i in range(n) :
        for j in range(x) :
            if(j<n-i-1) :
                print(' ',end='')
            elif(j>n+i-1) :
                print(' ',end='')
            else :
                print('t',end='')
        print('\r')

invpyramid(3)