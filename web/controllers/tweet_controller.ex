defmodule FritterApp.TweetController do
  use FritterApp.Web, :controller
  import Ecto.Query, only: [from: 2]

  alias FritterApp.User
  alias FritterApp.Tweet

  def index(conn, %{"user_id" => user_id}) do
    user = Repo.get!(User, user_id)
    tweets = Tweet
    |> User.get_tweets(user_id)
    |> Repo.all
    tweets
    |> Enum.map(fn(data) -> Poison.Encoder.encode(data, []) end)
    |> Enum.join("\n")
    render(conn, "index.json", tweets: tweets, user: user)
  end

  def new(conn, %{"user_id" => user_id}) do
    user = Repo.get!(User, user_id)
    changeset = Tweet.changeset(%Tweet{})
    render(conn, "new.html", user: user, changeset: changeset)
  end

  def edit(conn, %{"user_id" => user_id, "id" => id}) do
    user = Repo.get!(User, user_id)
    tweet =
      user
      |> assoc(:tweets)
      |> Repo.get(id)
    changeset = Tweet.changeset(tweet)
    render(conn, "edit.html", user: user, id: id, changeset: changeset)
  end

  def update(conn, %{"tweet" => tweet_params, "user_id" => user_id, "id" => id}) do
    changeset =
      Repo.get(Tweet, id)
      |> Tweet.changeset(tweet_params)

    case Repo.update(changeset) do
      {:ok, tweet} ->
        conn
        |> put_status(201)
        |> send_resp(:no_content, "")
      {:error, changeset} ->
        conn
        |> send_resp(400, "")
    end
  end

  def create(conn, %{"tweet" => tweet_params, "user_id" => user_id}) do
    user = Repo.get!(User, user_id)
    changeset =
      user
      |> build_assoc(:tweets)
      |> Tweet.changeset(tweet_params)
    case Repo.insert(changeset) do
      {:ok, tweet} ->
        conn
        new_tweet = tweet
        |> Map.from_struct
        |> Map.drop([:__meta__, :user])
        render(conn, "create.json", tweet: new_tweet)
      {:error, changeset} ->
        render conn, "new.html", user: user, changeset: changeset
    end
  end

  def delete(conn, %{"id" => id, "user_id" => user_id}) do
    Repo.get!(Tweet, id)
    |> Repo.delete!()
    conn
    |> put_status(201)
    |> send_resp(:no_content, "")
  end
end
