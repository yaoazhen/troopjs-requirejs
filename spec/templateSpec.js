require(['../template'], function(template){


  describe('template comile', function(){

    it('should compile <% %>', function(done){
      var body = "<div><a <%= data.a %>></a></div>";

      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><a " + data.a + "></a></div>"; return o; }'
      );

      done();
    });

    // TODO: test will move to troopjs-ef project
    it('should compile <%~ %> to blurb to be a innerText', function(done){
      var body = "<div><a><%~ 123456 %></a></div>";

      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><a data-weave="troopjs-ef/blurb/widget" data-blurb-id="123456"></a></div>"; return o; }'
      );

      done();
    });

    it('should compile <%~ %> to blurb to be a attribute value', function(done){
      var body = "<div><a title="<%~ 4321 %>"></a></div>";

      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><a data-weave="troopjs-ef/blurb/widget" data-blurb-id="title=4321"></a></div>"; return o; }'
      );

      done();
    });

    it('should compile <%~ %> to blurb for both innerText and attribute value', function(done){
      var body = "<div><a title="<%~ 4321 %>"><%~ 1234 %></a></div>";

      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><a data-weave="troopjs-ef/blurb/widget" data-blurb-id="1234|title=4321|"></a></div>"; return o; }'
      );

      done();
    });


    it('should compile <%@ %> to media ', function(done){
      var body = '<div><img src="<%@ 10000 %>"></div>';
      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><img data-weave="troop-ef/media/widget" data-media-id="10000"></div>"; return o; }'
      );

      done();

    });

    it('should compile <%@ %> to media ', function(done){
      var body = '<div><img src="<%@ 10000 %>" alt="<%~ 1234 %>"></div>';
      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><img data-weave="troop-ef/mix(src={troopjs-ef/meida/widget(10000)}|alt={troopjs-ef/blurb/widget(1234)})"></div>"; return o; }'
      );

      done();

    });

    it('should compile <%@ %> to media url and compile <%~ %> to innerText', function(done){
      var body = '<div><a src="<%@ 10000 %>"><%~ 1234 %></a></div>';
      expect(template.compile(body)).toEqual(
        'function template(data) { var o = "<div><a data-weave="troop-ef/mix(src={troopjs-ef/meida/widget(10000)}|innerText={troopjs-ef/blurb/widget(1234)})"></a>"; return o; }'
      );

      done();

    });
  });
});




