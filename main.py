import random
import string
import tkinter as tk

# Определяем функцию для генерации пароля
def generate_password():
    length = int(length_entry.get())  # Получаем желаемую длину пароля
    complexity = int(complexity_scale.get())  # Получаем уровень сложности пароля
    
    # Создаем набор символов в зависимости от уровня сложности
    if complexity == 1:
        characters = string.ascii_letters
    elif complexity == 2:
        characters = string.ascii_letters + string.digits
    else:
        characters = string.ascii_letters + string.digits + string.punctuation
    
    # Генерируем случайный пароль заданной длины
    password = ''.join(random.choice(characters) for i in range(length))
    
    # Отображаем сгенерированный пароль в текстовом поле
    password_entry.delete(0, tk.END)
    password_entry.insert(0, password)

# Создаем графический интерфейс
root = tk.Tk()
root.title("Генератор паролей")

# Добавляем поля для ввода параметров
length_label = tk.Label(root, text="Длина пароля:")
length_label.grid(row=0, column=0, padx=5, pady=5)
length_entry = tk.Entry(root)
length_entry.grid(row=0, column=1, padx=5, pady=5)

complexity_label = tk.Label(root, text="Уровень сложности:")
complexity_label.grid(row=1, column=0, padx=5, pady=5)
complexity_scale = tk.Scale(root, from_=1, to=3, orient=tk.HORIZONTAL)
complexity_scale.grid(row=1, column=1, padx=5, pady=5)

generate_button = tk.Button(root, text="Сгенерировать", command=generate_password)
generate_button.grid(row=2, column=0, columnspan=2, padx=5, pady=5)

# Добавляем поле для вывода сгенерированного пароля
password_label = tk.Label(root, text="Сгенерированный пароль:")
password_label.grid(row=3, column=0, padx=5, pady=5)
password_entry = tk.Entry(root)
password_entry.grid(row=3, column=1, padx=5, pady=5)


if __name__ == "__main__":
    root.mainloop()
