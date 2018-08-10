
describe('Given Augmented Presentation Decorator View', () => {

	describe('Given a Decorator View', () => {
		it('Decorator.DecoratorView is defined', () => {
			expect(Decorator.DecoratorView).to.not.be.undefined;
		});

		describe('Given a DecoratorView instance', () => {
			let el = document.getElementById("sandbox"),
			body = document.getElementsByTagName("body")[0],
			d;

			if (!el) {
				el = document.createElement("div");
				el.id = "sandbox";
				body.appendChild(el);
			}

			beforeEach(() => {
				d = new Decorator.DecoratorView({
					"el": "#sandbox",
					"name": "monkey"
				});
			});

			afterEach(() => {
				d.remove();
				d = null;
			});

			xit('DecoratorView is a Colleague', () => {
				expect(d instanceof Decorator.Colleague).to.be.true;
			});

			it('can create an instance that is a DecoratorView', () => {
				expect(d instanceof Decorator.DecoratorView).to.be.true;
			});

			it('the DecoratorView has a bound element', () => {
				//console.log("DecoratorView el", el);
				expect(d.el).to.not.be.undefined;
				expect(d.el).to.equal("#sandbox");
			});

			it('can return the binding attribute name', () => {
				const name = d.bindingAttribute();
				expect(name).to.equal("data-monkey");
			});

			it('can inject a template', () => {
				d.injectTemplate("<span></span>", el);
				const s = el.querySelector("span");
				expect(s).to.not.be.undefined;
			});

			it('can remove an injected template', () => {
				d.injectTemplate("<span></span>", el);
				d.removeTemplate(el);
				const s = el.querySelector("span");
				expect(s).to.be.null;
			});

			it('can return a bound element', () => {
				d.injectTemplate("<span data-monkey=\"me\"></span>", el);
				const s = el.querySelector("span");
				const e = d.boundElement("me");
				expect(s).to.not.be.undefined;
				expect(e).to.not.be.undefined;
			});
		});
	});
});
