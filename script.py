# import os
# import shutil
# import re

# svg_path = "./images"
# icons_path = "./icons"

# # Regular expression to match desired filenames. Capture everything before the first hyphen, excluding any trailing digits.
# pattern = re.compile(r'^([a-zA-Z]+)(?:\d*-.*|\d*\.jpg)$')

# for file in os.listdir(svg_path):
#     match = pattern.match(file)
#     if match:
#         folder_name = match.group(1)
#         dest_folder = os.path.join(icons_path, folder_name)
#         if not os.path.exists(dest_folder):
#             os.makedirs(dest_folder)
#         shutil.move(os.path.join(svg_path, file), dest_folder)

import re

# Path to your CSS file
css_path = "./ci.css"

with open(css_path, 'r') as file:
    content = file.read()

    # Regular expression to match the CSS blocks you've described
    pattern = re.compile(r'(\.ci-([a-zA-Z]+?)(?:\d*|-.*?),.*?{)\s*content: url\("(.*?)"\);', re.DOTALL)

    def replacement(match):
        identifier = match.group(2)
        file_name = match.group(3).split("/")[-1]
        return f'{match.group(1)}\n  content: url("icons/{identifier}/{file_name}");'

    # Replace matched blocks with the desired path structure
    modified_content = pattern.sub(replacement, content)

with open(css_path, 'w') as file:
    file.write(modified_content)
