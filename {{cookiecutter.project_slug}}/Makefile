FILES = $(wildcard *.js *.sh *.json)
SOURCES = $(FILES) node_modules lib

.PHONY: build
build: clean software.tar.gz

software.tar.gz: $(SOURCES)
	tar cvzf software.tar.gz $(SOURCES)

node_modules:
	npm i --production

.PHONY: clean
clean:
	rm -rf software.tar.gz node_modules/

.PHONY: test
test:
	npm test
