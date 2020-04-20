import os
for file_name in os.listdir("api"):
    old_file_name = os.path.join("api", file_name)
    new_file_name = os.path.join("api", file_name.lower())
    os.rename(old_file_name, new_file_name)
    print(f"new file {new_file_name} created")