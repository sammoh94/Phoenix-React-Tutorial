defmodule FritterApp.Router do
  use FritterApp.Web, :router

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :put_secure_browser_headers
  end

  pipeline :csrf do
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/app", FritterApp do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    resources "/users", UserController, except: [:edit, :update]
    resources "/login", LoginController, only: [:new, :create]

    scope "/" do
      resources "/users", UserController, only: [] do
        resources "/tweets", TweetController
      end
    end
  end

  # Other scopes may use custom stacks.
  # scope "/api", FritterApp do
  #   pipe_through :api
  # end
end
