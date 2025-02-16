type CookieOptions = {
	path?: string;
	expires?: Date;
	maxAge?: number;
	domain?: string;
	secure?: boolean;
	sameSite?: 'Strict' | 'Lax' | 'None';
};

const defaultOptions: CookieOptions = {
	path: '/',
	secure: true,
	sameSite: 'Lax'
};

export const cookieService = {
	setCookie(name: string, value: string, options: CookieOptions = {}) {
		const mergedOptions = { ...defaultOptions, ...options };
		let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

		if (mergedOptions.path) cookieString += `; path=${mergedOptions.path}`;
		if (mergedOptions.expires) cookieString += `; expires=${mergedOptions.expires.toUTCString()}`;
		if (mergedOptions.maxAge) cookieString += `; max-age=${mergedOptions.maxAge}`;
		if (mergedOptions.domain) cookieString += `; domain=${mergedOptions.domain}`;
		if (mergedOptions.secure) cookieString += '; secure';
		if (mergedOptions.sameSite) cookieString += `; samesite=${mergedOptions.sameSite}`;

		document.cookie = cookieString;
	},

	getCookie(name: string): string | null {
		const cookies = document.cookie.split(';');
		for (let cookie of cookies) {
			const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
			if (cookieName === encodeURIComponent(name)) {
				return decodeURIComponent(cookieValue);
			}
		}
		return null;
	},

	deleteCookie(name: string, options: CookieOptions = {}) {
		const mergedOptions = { ...defaultOptions, ...options };
		this.setCookie(name, '', {
			...mergedOptions,
			expires: new Date(0),
		});
	},

	setAnalyticsCookies(enabled: boolean) {
		if (enabled) {
			this.setCookie('analytics_enabled', 'true', {
				maxAge: 365 * 24 * 60 * 60,
				sameSite: 'Lax'
			});
		} else {
			this.deleteCookie('analytics_enabled');
		}
	},

	setMarketingCookies(enabled: boolean) {
		if (enabled) {
			this.setCookie('marketing_enabled', 'true', {
				maxAge: 365 * 24 * 60 * 60,
				sameSite: 'Lax'
			});
		} else {
			this.deleteCookie('marketing_enabled');
		}
	},

	setNecessaryCookies() {
		this.setCookie('necessary_cookies', 'true', {
			maxAge: 365 * 24 * 60 * 60,
			sameSite: 'Lax'
		});
	}

};