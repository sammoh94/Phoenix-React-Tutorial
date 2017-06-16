defmodule FritterApp.TweetTest do
  use FritterApp.ModelCase

  alias FritterApp.Tweet

  @valid_attrs %{tweet: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Tweet.changeset(%Tweet{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Tweet.changeset(%Tweet{}, @invalid_attrs)
    refute changeset.valid?
  end
end
