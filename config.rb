#require "lib/markdown_helper.rb"

helpers do
  module MarkdownHelper
    require 'middleman-core/renderers/redcarpet'
    
    class MyRenderer < Middleman::Renderers::MiddlemanRedcarpetHTML
      def initialize(options={})
        super
      end
  
      def block_quote(quote)
        quote = quote.split("!author: ")

        if quote[1].nil? 
          raise IndexError, "You create a blockquote without author"
        end

        %(
          <blockquote class="article-quote">
            <i class="fas fa-quote-left fa-lg fa-pull-left"></i>
            <p>#{quote[0]}</p>
            <p class="article-quote-author">- #{quote[1]}</p>
          </blockquote>
        )
      end
    end
  end  
end

###
# Page options, layouts, aliases and proxies
###

# With no layout
page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

set :markdown_engine, :redcarpet
set :markdown,
  fenced_code_blocks: true,
  smartypants: true,
  renderer: MarkdownHelper::MyRenderer

activate :syntax, :line_numbers => true

activate :directory_indexes

activate :blog do |blog|
  blog.permalink = "{title}.html"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.permalink = "/{title}.html"
  blog.layout = "layout"

  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false

# Build-specific configuration
configure :build do  
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end