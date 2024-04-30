class VideoDownloadPage {
	constructor(page) {
		 this.page = page;
	}

	locators = {
		getVideoDownloadHeader: () => this.page.getByLabel('Video Download').getByText('Video Download')
	};
	

}

export default VideoDownloadPage;