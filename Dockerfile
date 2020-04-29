FROM ruby:latest

COPY . .

RUN apt-get update \
  && apt-get install -yq \
    nodejs \
    build-essential

RUN gem install bundler \
  && bundle install \
  && bundle update
