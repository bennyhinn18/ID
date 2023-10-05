import pandas as pd

# Read the Excel file
df = pd.read_excel('your_excel_file.xlsx')

# Convert the DataFrame to JSON and save it to a file
df.to_json('output.json', orient='records')