describe('Strings', function() {

  describe('toBeEmptyString', function() {
    it('should assert value is a string with no characters', function() {
      expect('').toBeEmptyString();
      expect(' ').not.toBeEmptyString();
    });
  });

  describe('toBeNonEmptyString', function() {
    it('should assert value is a string with at least one character', function() {
      expect(' ').toBeNonEmptyString();
      expect('').not.toBeNonEmptyString();
      expect(null).not.toBeNonEmptyString();
    });
  });

  describe('toBeString', function() {
    it('should assert value is a string of any length', function() {
      expect('').toBeString();
      expect(' ').toBeString();
      expect(null).not.toBeString();
    });
  });

  describe('toBeHtmlString', function() {
    it('should assert value is a string of HTML markup', function() {
      expect('<element>text</element>').toBeHtmlString();
      expect('<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>').toBeHtmlString();
      expect('<div ng-if="foo > bar || bar < foo && baz == bar"></div>').toBeHtmlString();
      expect('<li ng-if="foo > bar || bar < foo && baz == bar">').toBeHtmlString();
      expect('div').not.toBeHtmlString();
      expect(null).not.toBeHtmlString();
      this.ngMultiLine = '';
      this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
      this.ngMultiLine += '\n';
      this.ngMultiLine += '  Watch with Google TV';
      this.ngMultiLine += '\n';
      this.ngMultiLine += '</a>';
      this.ngMultiLine += '\n';
      expect(this.ngMultiLine).toBeHtmlString();
    });
  });

  describe('toBeJsonString', function() {
    it('should assert value is a string of parseable JSON', function() {
      expect('{}').toBeJsonString();
      expect('[]').toBeJsonString();
      expect('[1]').toBeJsonString();
      expect('[1,]').not.toBeJsonString();
      expect('<>').not.toBeJsonString();
      expect(null).not.toBeJsonString();
      expect('').not.toBeJsonString();
      expect(void(0)).not.toBeJsonString();
    });
  });

  describe('toBeWhitespace', function() {
    it('should assert value is a string containing only tabs, spaces, returns etc', function() {
      expect(' ').toBeWhitespace();
      expect('').toBeWhitespace();
      expect('has-no-whitespace').not.toBeWhitespace();
      expect('has whitespace').not.toBeWhitespace();
      expect(null).not.toBeWhitespace();
    });
  });

  describe('toStartWith', function() {
    describe('when subject is empty', function() {
      it('should handle undefined or empty strings', function() {
        expect('').not.toStartWith('');
        expect(void(0)).not.toStartWith('');
        expect(void(0)).not.toStartWith('undefined');
        expect('undefined').not.toStartWith(void(0));
      });
    });
    describe('when subject is not empty', function() {
      it('should assert the leading characters of the subject match the expected string', function() {
        expect('jamie').toStartWith('jam');
        expect(' jamie').not.toStartWith('jam');
        expect('Jamie').not.toStartWith('jam');
      });
    });
  });

  describe('toEndWith', function() {
    describe('when subject is empty', function() {
      it('should handle undefined or empty strings', function() {
        expect('').not.toEndWith('');
        expect(void(0)).not.toEndWith('');
        expect(void(0)).not.toEndWith('undefined');
        expect('undefined').not.toEndWith(void(0));
      });
    });
    describe('when subject is not empty', function() {
      it('should assert the leading characters of the subject match the expected string', function() {
        expect('jamie').toEndWith('mie');
        expect('jamie ').not.toEndWith('mie');
        expect('jamiE').not.toEndWith('mie');
      });
    });
  });

  describe('toBeLongerThan', function() {
    describe('when the subject or comparison are not strings', function() {
      it('should report a failure, since we are asserting the relative lengths of two strings', function() {
        expect('truthy').not.toBeLongerThan(void(0));
        expect(void(0)).not.toBeLongerThan('truthy');
        expect('').not.toBeLongerThan(void(0));
        expect(void(0)).not.toBeLongerThan('');
      });
    });
    describe('when the subject or comparison are both strings', function() {
      it('should assert the subject is longer than the comparision string', function() {
        expect('ab').not.toBeLongerThan('abc');
        expect('abc').toBeLongerThan('ab');
        expect('a').toBeLongerThan('');
        expect('').not.toBeLongerThan('a');
      });
    });
  });

  describe('toBeShorterThan', function() {
    describe('when the subject or comparison are not strings', function() {
      it('should report a failure, since we are asserting the relative lengths of two strings', function() {
        expect('truthy').not.toBeShorterThan(void(0));
        expect(void(0)).not.toBeShorterThan('truthy');
        expect('').not.toBeShorterThan(void(0));
        expect(void(0)).not.toBeShorterThan('');
      });
    });
    describe('when the subject or comparison are both strings', function() {
      it('should assert the subject is shorter than the comparision string', function() {
        expect('ab').toBeShorterThan('abc');
        expect('abc').not.toBeShorterThan('ab');
        expect('a').not.toBeShorterThan('');
        expect('').toBeShorterThan('a');
      });
    });
  });

  describe('toBeSameLengthAs', function() {
    describe('when the subject or comparison are not strings', function() {
      it('should report a failure, since we are asserting the relative lengths of two strings', function() {
        expect('truthy').not.toBeSameLengthAs(void(0));
        expect(void(0)).not.toBeSameLengthAs('truthy');
        expect('').not.toBeSameLengthAs(void(0));
        expect(void(0)).not.toBeSameLengthAs('');
      });
    });
    describe('when the subject or comparison are both strings', function() {
      it('should assert the subject is the same length as the comparision string', function() {
        expect('ab').toBeSameLengthAs('ab');
        expect('abc').not.toBeSameLengthAs('ab');
        expect('a').not.toBeSameLengthAs('');
        expect('').not.toBeSameLengthAs('a');
      });
    });
  });

});
