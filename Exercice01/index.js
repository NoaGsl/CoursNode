import fs from 'fs/promises';

async function createFiles() {
    await fs.mkdir("nouveau_repertoire");
    
    const contenu = "Contenu du fichier à écrire.";
    await fs.writeFile("nouveau_fichier.txt", contenu, 'utf8');
    
    const data = await fs.readFile("nouveau_fichier.txt", "utf8");
    console.log("data: ", data);
    
    const fichiers = await fs.readdir('.');
    console.log("fichiers: ", fichiers);
}

async function deleteFiles() {
    await fs.unlink("nouveau_fichier.txt");
    
    await fs.rmdir("nouveau_repertoire");
}

await createFiles()
await deleteFiles()