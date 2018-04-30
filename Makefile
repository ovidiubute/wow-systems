PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

test: 
		./node_modules/.bin/jest
