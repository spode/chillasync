import { CHANNELS } from '$env/static/private';
import { delayed } from '$lib';
import { getLiveSearchResults } from '$lib/ytapi';
import { error } from '@sveltejs/kit';

const videos = await Promise.all(
    CHANNELS.split(",").map(element => getLiveSearchResults(element).then(e => e?.items))
).then(e => e.flat());

videos.sort((a, b) => {
    const dateA = a?.snippet?.publishedAt ?? '';
    const dateB = b?.snippet?.publishedAt ?? '';

    return dateB.localeCompare(dateA);
});

let count = 5
export const load = (async () => {

    if (videos[0]) {

        return { videos, count };
    } else {
        error(404, {
            message: 'No data available'
        });
    }

})