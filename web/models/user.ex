defmodule FritterApp.User do
  use FritterApp.Web, :model

  schema "users" do
    field :name, :string
    has_many :tweets, FritterApp.Tweet, on_delete: :delete_all

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end

  def get_tweets(query, user_id) do
    from t in query,
      where: t.user_id == ^user_id,
      select: t
  end
end

defimpl Poison.Encoder, for: FritterApp.User do
  def encode(struct, options) do
    struct
    |> Map.from_struct
    |> sanitize_map()
    |> Poison.Encoder.Map.encode(options)
  end

  defp sanitize_map(map) do
    Map.drop(map, [:__meta__, :__struct__, :tweets])
  end
end
