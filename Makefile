install:
	npm ci

brain-games: 
	bin/brain-games.js

brain-even:
	bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .