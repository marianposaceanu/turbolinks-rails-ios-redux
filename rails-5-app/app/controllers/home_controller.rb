class HomeController < ApplicationController
  def index
    @title = 'Home'
  end

  def faq
    @title = 'FAQ'
  end
end
