import JSZip from 'jszip';
import { v4 as uuidv4 } from 'uuid';

export function downloadBlob(url: string, fileName = 'download'): void {
	// Create download link
	const link = document.createElement('a');
	link.href = url;
	link.download = fileName;

	// Trigger download
	link.click();
}

export async function downloadAll(outputs: Blob[]) {
	const zip = new JSZip();

	for (const file of outputs) {
		zip.file(`remove-biji-${uuidv4()}.png`, file); // adds the image file to the zip file
	}

	const zipData = await zip.generateAsync({
		type: 'blob',
		streamFiles: true
	});

	const link = document.createElement('a');
	link.href = window.URL.createObjectURL(zipData);
	link.download = `remove-biji-batch-${uuidv4()}.zip`;
	link.click();

	window.URL.revokeObjectURL(link.href);
}