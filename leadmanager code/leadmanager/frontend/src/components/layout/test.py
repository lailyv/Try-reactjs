i = input("Nhap gia tri cua ban: ")

sum = 0
songuyen = int(i)
if songuyen > 0:
    for x in range(0,songuyen+1):
        # sum += x
        # print(sum)
        if x == 1:
            sum += 1
        elif x % 2 == 0:
            sum += x
        else:
            sum -= x
else:
        print("So nay nho hon 0")


print(sum)