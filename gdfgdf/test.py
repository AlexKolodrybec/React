n = int(input("Введіть розмір таблиці n: "))
A = [[(i + 1) * (j + 1) for j in range(n)] for i in range(n)]

for row in A:
    print(" ".join(map(str, row)))