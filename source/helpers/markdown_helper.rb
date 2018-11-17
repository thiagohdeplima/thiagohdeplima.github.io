module MarkdownHelper
  require 'middleman-core/renderers/redcarpet'
  
  class MyRenderer < Middleman::Renderers::MiddlemanRedcarpetHTML
    def initialize(options={})
      super
    end

    def block_quote(quote) 
      "Hello #{quote}"
    end
  end
end
  