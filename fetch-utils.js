const supabaseUrl = 'https://qfthlhgajntgdprhiwdt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdGhsaGdham50Z2Rwcmhpd2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2Mzg1NTMsImV4cCI6MTk3NTIxNDU1M30.uMyRqCP7wzm3RZbnWIauQSH1oK1bPeXORHPe6sPjmWA';

const client = supabase.createClient(supabaseUrl, supabaseKey);

export async function createPoll(data) {
    const response = await client.from('polls').insert(data);

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
}

export async function getPolls() {
    const response = await client.from('polls').select('*');

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
}