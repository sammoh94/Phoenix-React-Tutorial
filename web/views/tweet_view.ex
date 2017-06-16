defmodule FritterApp.TweetView do
  use FritterApp.Web, :view

  alias FritterApp.Tweet

  def render("index.json", data) do
    %{tweets: data.tweets, user: data.user}
  end

  def render("create.json", data) do
    IO.inspect data.tweet
    %{tweet: data.tweet.tweet, id: data.tweet.id, user_id: data.tweet.user_id}
  end
end
