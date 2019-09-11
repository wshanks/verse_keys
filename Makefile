BLDDIR = build

# Necessary because zip copies leading directories if run from above targets
ABS_BLDDIR := $(shell readlink -f $(BLDDIR))

all: xpi

xpi: $(BLDDIR)/verse_keys.xpi

$(BLDDIR)/verse_keys.xpi:
	@mkdir -p $(dir $@)
	cd addon; zip -r $(ABS_BLDDIR)/verse_keys.xpi * -x \*.swp -x 'libs/mousetrap/*'
	cd addon; zip -r $(ABS_BLDDIR)/verse_keys.xpi * -i libs/mousetrap/mousetrap.min.js

clean:
	rm -f $(BLDDIR)/verse_keys.xpi

.PHONY: all clean xpi
