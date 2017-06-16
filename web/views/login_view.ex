defmodule FritterApp.LoginView do
  use FritterApp.Web, :view

  def render("index.json", data) do
    %{id: data.user.id}
  end
end
