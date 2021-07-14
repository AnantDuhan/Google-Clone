function Footer() {
    return (
      <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className="px-8 py-3">
          <p>India</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 py-3">
          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <a
              href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1"
              className="link"
            >
              About
            </a>
            <a
              href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              className="link"
            >
              Advertising
            </a>
            <a
              href="https://www.google.com/intl/en_in/business/"
              className="link"
            >
              Business
            </a>
            <a
              href="https://www.google.com/search/howsearchworks/?fg=1"
              className="link"
            >
              How Search works
            </a>
          </div>
          <div className="flex justify-center space-x-8 md:ml-auto">
            <a
              href="https://policies.google.com/privacy?hl=en-IN&fg=1"
              className="link"
            >
              Privacy
            </a>
            <a
              href="https://policies.google.com/terms?hl=en-IN&fg=1"
              className="link"
            >
              Terms
            </a>
            <a href="" className="link">
              Settings
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer
