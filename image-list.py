import os

def generate_image_import_script(image_folder, output_file):
    try:
        # Hämta alla filer i mappen
        files = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f))]

        # Filtrera bara bildfiler (lägg till fler om nödvändigt)
        image_extensions = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"}
        images = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

        # Börja skapa innehållet för JavaScript-filen
        js_content = "const images = [\n"
        for image in images:
            js_content += f"  require('./{image}'),\n"
        js_content += "];\n\nexport default images;\n"

        # Skriv till output-filen
        with open(output_file, "w", encoding="utf-8") as file:
            file.write(js_content)

        print(f"JavaScript-filen har skapats: {output_file}")

    except Exception as e:
        print(f"Ett fel inträffade: {e}")

# Ange mapp med bilder och var du vill spara JavaScript-filen
image_folder = "./assets/images"  # Byt ut mot sökvägen till din mapp
output_file = "./assets/images.js"  # Byt ut mot sökvägen till din JS-fil

generate_image_import_script(image_folder, output_file)