import {createClient} from '@supabase/supabase-js';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb2poa3dscHdqZmF5aWlybXFtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDYyNDk5MSwiZXhwIjoyMDk2MjAwOTkxfQ.YqI9JJEMXCNphhWgKqt7aelHN0upBcbfpTgdHnYAiMs';
const url="https://osojhkwlpwjfayiirmqm.supabase.co"








const supabase = createClient(url,key);

export default function uploadMedia(file) {
    return new Promise((resolve, reject) => {
        if (file==null) {
            reject("No file provided");
            return;
        }else {
            const timestamp = new Date().getTime();
            const fileName = timestamp + "_" + file.name;
            supabase.storage.from('images').upload(fileName, file).then(() => {
                const publicUrl = supabase.storage.from('images').getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl);
            }).catch((error) => {
                reject(error);
            });
        }
    });
}